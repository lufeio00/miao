var lufeio00 = {
  chunk:function(array,size){
    var r=[]
    var j=0
    for(var i=0;i<array.length;i++){
      r[j].push(array[i])
      if(i%size==0){
        j++
      }
    }
    return r
  }


}
