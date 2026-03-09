function greetingSkill(){

const name = getMemory("username")

if(name){

speak(" " + name + ". How can I assist you today?")

}else{

speak("Hello. How can I assist you today?")

}

}