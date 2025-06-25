'use client';

import { useState, type ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Upload, Loader2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          variant: 'destructive',
          title: 'File too large',
          description: 'Please select a file smaller than 5MB.',
        });
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        variant: 'destructive',
        title: 'No file selected',
        description: 'Please choose an image to upload.',
      });
      return;
    }

    setIsUploading(true);

    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsUploading(false);
    
    toast({
      title: 'Upload Successful!',
      description: `"${selectedFile.name}" has been processed. Note: This is a demo; the image is not permanently saved.`,
    });

    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>Upload a New Image</CardTitle>
        <CardDescription>
          Add your favorite moments to our collection. (Max file size: 5MB)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center w-full">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-secondary/80 transition-colors"
          >
            {previewUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={previewUrl}
                  alt="Image preview"
                  fill
                  className="object-contain p-2 rounded-lg"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ImageIcon className="w-10 h-10 mb-3 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 5MB</p>
              </div>
            )}
            <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/png, image/jpeg, image/gif" />
          </label>
        </div>
        
        {selectedFile && (
          <div className="text-center text-sm text-muted-foreground">
            Selected file: <span className="font-medium text-foreground">{selectedFile.name}</span>
          </div>
        )}

        <Button onClick={handleUpload} disabled={isUploading || !selectedFile} className="w-full">
          {isUploading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Upload className="mr-2 h-4 w-4" />
          )}
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </Button>
      </CardContent>
    </Card>
  );
}
