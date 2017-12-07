#include <mindstrorms.h>

//kill function
void KILL (){
    robot.holdJoints();
    exit(0);
}

//turn function requires a turnAmount VAR
void turn (int light,double uval1,double uval2){
	if(light>7){
        robot.setJointSpeeds(1600,1600,-1600,1600);      
    }else if(light<7){
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
