



const VirtualPet = ()=>{

    const PetName = prompt("Enter the Name of your pet")
    let EnergyLevels = 0
    let HappinessLevels = 0
    for(var count = 0;count<6;count++ ){

        let Perform = prompt("Feed or Pet or Walk?")
        if (Perform.toLowerCase()=="feed"){
            EnergyLevels=EnergyLevels+2
        }
        else if(Perform.toLowerCase()=="pet"){
            HappinessLevels++
        }
        else if(Perform.toLowerCase()=='walk'){
            if(EnergyLevels>0){
                EnergyLevels=EnergyLevels-1
                HappinessLevels=HappinessLevels+1
            }
            else{
                alert("Not enough energy to enjoy a walk...:(")
            }
        }
    }

    console.log("Pet's Name : "+PetName)
    console.log('Energy Levels : '+EnergyLevels)
    console.log("Hapiness Levels : "+HappinessLevels)
   

}

VirtualPet()
