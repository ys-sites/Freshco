$code = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class BgRemover {
    public static void Process(string srcPath, string destPath) {
        try {
            using (Bitmap bmp = new Bitmap(srcPath)) {
                BitmapData data = bmp.LockBits(new Rectangle(0, 0, bmp.Width, bmp.Height), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
                int bytes = Math.Abs(data.Stride) * bmp.Height;
                byte[] argbValues = new byte[bytes];
                Marshal.Copy(data.Scan0, argbValues, 0, bytes);

                for (int i = 0; i < bytes; i += 4) {
                   byte b = argbValues[i]; byte g = argbValues[i+1]; byte r = argbValues[i+2];
                   if (r > 240 && g > 240 && b > 240) {
                       argbValues[i+3] = 0; // Set to strictly transparent
                   }
                }
                Marshal.Copy(argbValues, 0, data.Scan0, bytes);
                bmp.UnlockBits(data);
                bmp.Save(destPath, ImageFormat.Png);
                Console.WriteLine("Processed " + destPath);
            }
        } catch (Exception ex) {
            Console.WriteLine("Failed for " + srcPath + " : " + ex.Message);
        }
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[BgRemover]::Process("C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\cabage.jpg", "C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\cabage_bg.png")
[BgRemover]::Process("C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\carrot.jpg", "C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\carrot_bg.png")
[BgRemover]::Process("C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\green.jpg", "C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\green_bg.png")
[BgRemover]::Process("C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\tomato.jpg", "C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\tomato_bg.png")
Write-Output "Image conversion complete!"
