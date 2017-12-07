/* File: kill.ch
kill 12/7
ryan and mallory */
#include <mindstorms.h>
CMindstorms robot;

void killBot(int touched) {
    if (touched) { 
    robot.holdJoints(); 
}
    }
