<?php

namespace App\Http\Controllers;
use App\Models\File;
use Illuminate\Http\Request;
use App\Http\Resources\FileResource;
use App\Http\Resources\FileCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Storage\App\Public\Uploads;


class FileUpload extends Controller
{
   //uzimanje fajlova iz baze
//     public function getFileText($name)
//    {
//     $path = storage_path('app/' . $name);

//     if (file_exists($path)) {
//         $content = Storage::get($name);
//         return response()->json(['text' => $content]);
//     } else {
//         return response()->json(['error' => 'File not found'], 404);
//     }
//    }

//uzimanje fajlova iz baze
public function getFiles($filename)
{
    $path = storage_path('app/' . $filename);

    if (file_exists($path)) {
        $content = Storage::get($filename);
        return response()->json(['content' => $content]);
    } else {
        return response()->json(['error' => 'File not found'], 404);
    }
}



    public function createForm(){
        return view('fileUpload');
      }
    
    public function fileUpload(Request $request){
            $request->validate([
            'file' => 'required|mimes:csv,txt,xlx,xls,pdf,doc,docx|max:20480'
            ]);
            $fileModel = new File;
            if($request->file()) {
                $fileName = time().'_'.$request->file->getClientOriginalName();
                $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');
                $fileModel->name = time().'_'.$request->file->getClientOriginalName();
                $fileModel->file_path = '/storage/' . $filePath;
                $fileModel->save();
                return back()
                ->with('success','File has been uploaded.')
                ->with('file', $fileName);
            }
       }


       public function store(Request $request)
       {
           $validator = Validator::make($request->all(), [
              'id' => 'required',
               'name' => 'required|string|max:50',
               'num_pages' => 'required',
               'author_id' => 'required',
               'genre_id' => 'required'
           ]);
   
           if ($validator->fails()) {
               return response()->json($validator->errors());
           }
   
           $book = Book::create([
              'id' => $request->id,
               'name' => $request->name,
               'num_pages' => $request->num_pages,
               'author_id' => $request->author_id,
               'genre_id' => $request->genre_id,
               
           ]);
   
           return response()->json(['Book created successfully.', new BookResource($book), 'success' => true]);
       }

       public function destroy(Book $book)
       {
           $book->delete();
           return response()->json('Book deleted successfully.');
       }

       public function getAllFilesGenreAuthorName()
    {

      $fileData = DB::table('files')
            ->join('authors', 'files.author_id', '=', 'authors.author_id')
            ->join('genres', 'files.genre_id', '=', 'genres.genre_id')
            ->select('files.*', 'authors.name as author_name', 'genres.name as genre_name')
            ->get();

        // Prolazak kroz rezultate i dodavanje vrednosti u niz
        $result = [];
        foreach ($fileData as $file) {
            $result[] = [
                'file_id' => $file->id,
                'fileName' => $file->name,
                'authorName' => $file->author_name,
                'genreName' => $file->genre_name,
                'fileDescription' => $file->description,
            ];
        }

        return $result;
    }


}
