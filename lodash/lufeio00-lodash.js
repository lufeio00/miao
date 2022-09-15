var lufeio00 = {
  chunk:function(array,size=1){
    var r=[], t=[],j=0
    for(var i=0;i<array.length;i++){
      if(j==size){
        r.push(t)
        t=[]
        j=0
      }
      t.push(array[i])
      j++
    }
    r.push(t)
    return r
  },

  compact:function(array){
    var r=[]
    for(var i=0;i<array.length;i++){
      if(array[i]){
        r.push(array[i])
      }
    }
    return r
  },

 /*  difference:function(array,values){}, */

  fill:function(array,value,start=0,end=array.length){
    for(var i=start;i<end;i++){
      array[i]=value
    }
    return array
  },

  drop:function(array,n=1){
    for(var i=0;i<n;i++){
      array.shift()
    }
    return array
  },

/*   findIndex:function(array){}, */

/*   findLastIndex: function(){}, */

  flatten:function(array){
    var r=[]
    for(var i=0;i<array.length;i++){
      if(Array.isArray(array[i])){
        for(var j=0;j<array[i].length;j++){
          r.push(array[i][j])
        }
      }else{
        r.push(array[i])
      }
    }
    return r
  },

  flattenDeep:function(array){
    var r=[]
    y(array)
    function y(array){
      for(var i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
          y(array[i])
        }else{
          r.push(array[i])
        }
      }
    }
    return r
  },

  flattenDepth:function(array,depth=1){
    var r=[]

  },










}
