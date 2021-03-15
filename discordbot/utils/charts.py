from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import io
import matplotlib as mpl


def create_pie_chart(labels, data, explode=None, colours=None):
    if not explode:
        explode = (0 for _ in data)
    _, ax1 = plt.subplots()
    tp = {
        "fontsize": 28,
        "color": (.9, .9, .9),
        "fontproperties": fm.FontProperties(fname="./assets/font.ttf")
    }
    ax1.pie(data, explode=explode, labels=labels, autopct='%1.1f%%',
            shadow=True, startangle=90, colors=colours, textprops=tp,)

    ax1.axis('equal')
    buf = io.BytesIO()
    plt.savefig(buf, format='png', transparent=True,)
    buf.seek(0)
    return Image.open(buf)


def create_line_graph(xtitle, ytitle, y):
    _, ax1 = plt.subplots()
    font = fm.FontProperties(fname="./assets/font.ttf")
    color = (.9, .9, .9)
    transp = (.9, .9, .9, 0)

    size = 22
    ax1.spines['bottom'].set_color(color)
    ax1.spines['top'].set_color(transp) 
    ax1.spines['right'].set_color(transp)
    ax1.spines['left'].set_color(color)
    ax1.tick_params(axis='x', colors=color)
    ax1.tick_params(axis='y', colors=color)
    ax1.plot(y)
    ax1.set_xlabel(xtitle, fontproperties=font, color=color, size=size)
    ax1.set_ylabel(ytitle, fontproperties=font, color=color, size=size)
    buf = io.BytesIO()
    plt.savefig(buf, format='png', transparent=True)
    buf.seek(0)
    return Image.open(buf)
