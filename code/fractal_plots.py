import matplotlib.pyplot as plt
import fractal

for r in range(3, 6):
    V = fractal.generate_v(r, 3 ** r)
    plt.figure(figsize=(8.1, 8.1), dpi=100)
    plt.imshow(V, cmap="Greys", interpolation="nearest")
    plt.axis("off")
    plt.savefig("./" + str(r) + ".png", bbox_inches="tight", pad_inches=0)
