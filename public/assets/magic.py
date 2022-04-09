import cv2
import os
import numpy as np

roots = ["normal", "reversed"]
recursion = range(1, 5)
TOTAL = 7381 * 2
count = 0
for root in roots:
    for r in recursion:
        images = os.listdir(f"{root}/{r}")
        for i in images:
            count += 1
            fname = f"{root}/{r}/{i}"
            img = cv2.imread(fname)
            size = np.shape(img)
            if size == (370, 370, 3):
                # [rows, columns]
                crop = img[1:369, 1:369]
                cv2.imwrite(fname, crop)
            print(f"✂️ cropped {count * 100 / TOTAL:2.4f} %, {fname}", end="\r")
