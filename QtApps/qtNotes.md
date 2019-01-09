### Basics of QT gui
The QObject class is the base class all Qt related classes
The QWidgit class is the base class of all gui classes
Widgits can be embedded inside other widgits
QWidgit can contain multiple buttons and other gui elements

To embed a button inside a widgit:

declare the QWidgit:
```c++
QWidgit window;
window.setFixedSize(width, height);
```

declare the QPushButton (or other gui element)
```c++
QPushButton *button = new QPushButton("hello world", &window);
```

set the position of the button
```c++
button->setGeometry(x,y, width, height);
```

