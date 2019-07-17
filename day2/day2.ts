interface labelValue{
    label:string;
    b?:string;
}

function a(){
    function print(labelValue:labelValue){
        console.log(labelValue.label)
    }
    let lv1 = {label:'liyang',a:232434,c:31232};
    print(lv1);
}

a();