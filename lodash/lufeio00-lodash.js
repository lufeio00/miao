var lufeio00 = {
  chunk:function(array,size){
    var r=[]
    var t=[]
    var j=0
    for(var i=0;i<array.length;i++){
      if(j==size||i==array.length){
        r.push(t)
        t=[]
        j=0
      }
      t.push(array[i])
      j++
    }
    return r
  }

}
