import sys
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.axes_grid1 import make_axes_locatable
import fractal


for r in range(1, 5):
    l = 3 ** r
    n = l ** 2
    Hamiltonian = fractal.sierpinsky_hamiltonian(r, l, n)
    e_values, e_vec = np.linalg.eig(Hamiltonian)

    idx = e_values.argsort()[::-1]
    e_values = e_values[idx]
    e_vec = e_vec[:, idx]

    f = open("./assets/" + str(r) + "/" + str(r) + ".dat", "w")

    for i in range(n):
        f.write(str(e_values[i]) + "\n")
    f.close()

    for i in range(int(n)):
        figi, axi = plt.subplots(1, 1)
        plot = plt.imshow(
            np.transpose(pow(np.absolute(e_vec[:, i].reshape(l, l)), 2)),
            cmap="magma",
            interpolation="gaussian",
        )

        plt.setp(axi, xticks=[], yticks=[])
        divider = make_axes_locatable(axi)
        cax = divider.append_axes("right", size="3%", pad=0.1)
        cbar = figi.colorbar(plot, ax=axi, extend="both", cax=cax)
        cbar.minorticks_on()
        cbar.ax.tick_params(labelsize=5, pad=0.1)

        if i == 0:
            axi.set_title("The ground excited state", fontsize=12)
        elif i == 1:
            axi.set_title("The 1$^{st}$ excited state", fontsize=12)
        elif i == 2:
            axi.set_title("The 2$^{nd}$ excited state", fontsize=12)
        elif i == 3:
            axi.set_title("The 3$^{rd}$ excited state", fontsize=12)
        else:
            axi.set_title(str(i) + "$^{th}$ excited state", fontsize=12)

        plt.savefig("./assets/" + str(r) + "/" + str(r) + "_" + str(i) + ".png")
        plt.close()
