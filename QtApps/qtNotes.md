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

### Signals and slots
use signals and slots to do event handling
<ul>
<li>
signal is used to send a message 
</li>
<li>
slot is used to accept and respond to a signal
</li>
</ul>
in order to respond to a signal, a slot must be connected to a signal
connect is a static function of QObject

```c++
FooObjectA *fooA = new FooObjectA();
FooObjectB *fooB = new FooObjectB();
QObject::connect(fooA, SIGNAL (barred()), fooB, SLOT (baz()));
```

the parameters of the signal and the slot have to be the same
For example to transmit an integer tick to a progress bar that takes an integer input

```c++
void MediaProgressManager::tick(int missiseconds);
```
is the tick function to be used as a SIGNAL

```c++
void QProgressBar::setValue(int value);
```
is the function to be used as a SLOT

```c++
MediaProgressManager *manager = new MediaProgressManager();
QProgressBar *progress = new QProgressBar();
QObject::connect(manager, SIGNAL (tick(int), progress, SLOT (setValue(int)));
```

The relation between signals and slots is many-to-many.
<br>
Signals can also be connected to other signals.

