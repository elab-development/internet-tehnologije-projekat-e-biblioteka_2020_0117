<?php

namespace App\Http\Controllers;
use App\Models\File;
use Illuminate\Http\Request;

class FileUpload extends Controller
{
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
}
