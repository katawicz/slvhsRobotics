#include <mindstorms.h>

//Kill Switch Block
void KILL (){
    robot.holdJoints();
    exit(0);
}

//Move Forever
void MOVEFOREVER (){
    //move
    robot.moveForeverNB();
}

//Binocular Vision Tracking & Edge Detection
void BV&ED (){
  while (1){
//Getting Input from sensors for Binocular Vision Tracking & Edge Detection
    robot.getSensorUltrasonic(PORT2,uval1);
    robot.getSensorUltrasonic(PORT4,uval2);
    robot.getSensorTouch(PORT3,die);
    robot.getSensorLight(PORT1,light);
    }
//Processing data from sensors to turn and drive
  printf(light,"\n");
  if(light>7){
        robot.setJointSpeeds(1600,1600,-1600,1600);
  }
    else if(light<7){
        turnAmount=uval1-uval2;

      if(turnAmount<-20){
        robot.setJointSpeeds(1600,100,-1600,1600);
    }
    else if(turnAmount>20){
        robot.setJointSpeeds(1600,-1600,100,1600);
    }
    else{
        robot.setJointSpeeds(1600,-1600,-1600,1600);
    }
    }
}
