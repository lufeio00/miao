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


  dropRight:function dropRight(array,n=1){
    for(var i=0;i<n;i++){
      array.pop()
    }
    return array
  },

  /* dropRightWhile:function dropRightWhile(array,){}, */







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

  /* findIndex:function(array,identity,fromIndex=0){

  }, */

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

  flattenDepth:function flattenDepth(array,depth=1){
    var r=[]
    y(array,depth)
    function y(array,depth){
      for(var i=0;i<array.length;i++){
        if(Array.isArray(array[i])&&depth>0){
          y(array[i],--depth)
        }else{
          r.push(array[i])
        }
      }
    }
    return r
  },

  fromPairs:function fromPairs(pairs){
    var r={}
    for(var i=0;i<pairs.length;i++){
      r[pairs[i][0]]=pairs[i][1]
    }
    return r
  },

  head:function head(array){
    return array[0]
  },

  indexOf:function indexOf(array,value,fromIndex=0){
    for(var i=fromIndex;i<array.length;i++){
      if(array[i]==value){
        return i
      }
    }
    return -1
  },

  lastIndexOf:function lastIndexOf(array,value,fromIndex=array.length-1){
    for(var i=fromIndex;i>=0;i--){
      if(array[i]==value){
        return i
      }
    }
    return -1
  },

  initial:function initial(array){
    return array.slice(0,array.length-1)
  },

  join:function join(array,separator=','){
    var r=''
    for(var i=0;i<array.length;i++){
      if(i==array.length-1){
        r+=array[i]
      }else{
        r+=array[i]+''+separator
      }
    }
    return r
  },

  last:function lase(array){
    return array[array.length-1]
  },

  pull:function pull(array,...values){

    for(var i=0;i<array.length;i++){
      if(values.indexOf(array[i])!=-1){
        array=array.slice(0,i).concat(array.slice(i+1))
      }
    }
    return array
  },

  reverse:function reverse(array){
    var i=0
    var j=array.length-1
    while(j>i){
      var t=array[j]
      array[j]=array[i]
      array[i]=t
      i++
      j--
    }
    return array
  },

  intersection:function intersection(...arrays){
    var r=[]
    for(var i=0;i<arrays[0].length;i++){
      r.push(arrays[0][i])
      for(var j=1;j<arrays.length;j++){
        if(arrays[j].indexOf(arrays[0][i])==-1){
          r.pop()
          break
        }
      }
    }
    return r
  },



/*   every:function every(collection,predicate=){} */









}
