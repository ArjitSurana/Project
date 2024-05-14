import tkinter as tk
from time import strftime

def time():
    string = strftime('%H:%M:%S %p')
    lbl.config(text=string)
    lbl.after(1000, time)

root = tk.Tk()
root.title("Digital Clock")
root.geometry("600x1200")
root.resizable(False, False)

lbl = tk.Label(root, font=('calibri', 40, 'bold'), background='black', foreground='white')
lbl.pack(anchor='center')

time()
root.mainloop()
