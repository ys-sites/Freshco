$code = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class ImageCropper {
    public static void CropTransparent(string srcPath, string destPath) {
        using (Bitmap bmp = new Bitmap(srcPath)) {
            int width = bmp.Width;
            int height = bmp.Height;

            int minX = width, minY = height, maxX = 0, maxY = 0;

            BitmapData data = bmp.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            int stride = data.Stride;
            IntPtr ptr = data.Scan0;
            int bytes = Math.Abs(stride) * height;
            byte[] argbValues = new byte[bytes];
            Marshal.Copy(ptr, argbValues, 0, bytes);
            bmp.UnlockBits(data);

            for (int y = 0; y < height; y++) {
                for (int x = 0; x < width; x++) {
                    int idx = (y * stride) + (x * 4);
                    byte alpha = argbValues[idx + 3];
                    if (alpha > 5) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            int newWidth = maxX - minX + 1;
            int newHeight = maxY - minY + 1;

            int padX = (int)(newWidth * 0.05);
            int padY = (int)(newHeight * 0.05);
            minX = Math.Max(0, minX - padX);
            minY = Math.Max(0, minY - padY);
            newWidth = Math.Min(width - minX, newWidth + (padX*2));
            newHeight = Math.Min(height - minY, newHeight + (padY*2));

            Rectangle cropRect = new Rectangle(minX, minY, newWidth, newHeight);
            using (Bitmap target = new Bitmap(newWidth, newHeight)) {
                using (Graphics g = Graphics.FromImage(target)) {
                    g.DrawImage(bmp, new Rectangle(0, 0, target.Width, target.Height), cropRect, GraphicsUnit.Pixel);
                }
                target.Save(destPath, ImageFormat.Png);
            }
        }
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[ImageCropper]::CropTransparent("C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\logo.png", "C:\Users\Sharafath\Desktop\Website\Freshco\Freshco\public\logo_cropped.png")
Write-Output "Cropped successfully."
