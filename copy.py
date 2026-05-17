import shutil

src = r"C:\Users\Asus\.gemini\antigravity\brain\4c1cdd38-b027-4fe9-8c23-07b9a3f12a58\scroll_1_1773929858674.png"
dst = r"C:\Users\Asus\Desktop\plugin and package\Fluxy documentation\public\webstore_home.png"

shutil.copy(src, dst)
print("Done copying screenshot!")

src2 = r"C:\Users\Asus\.gemini\antigravity\brain\4c1cdd38-b027-4fe9-8c23-07b9a3f12a58\scroll_2_1773929873086.png"
dst2 = r"C:\Users\Asus\Desktop\plugin and package\Fluxy documentation\public\webstore_footer.png"
shutil.copy(src2, dst2)
print("Done copying footer!")

src3 = r"C:\Users\Asus\.gemini\antigravity\brain\4c1cdd38-b027-4fe9-8c23-07b9a3f12a58\webstore_demo_1773929682677.webp"
dst3 = r"C:\Users\Asus\Desktop\plugin and package\Fluxy documentation\public\webstore_demo.webp"
shutil.copy(src3, dst3)
print("Done copying recording!")
