function convertStarsNumber(stars){
  var arr=[];
  var num=stars.toString().substring(0,1);
  for(var i=1;i<=5;++i){
    if(i*2<num){
      arr.push(1);
    }else{
      arr.push(0);
    }
  }
  return arr;
}

function convertToCastString(casts) {
  var castsjoin = "";
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  var castsArray = []
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}

module.exports={
  convertStarsNumber: convertStarsNumber,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos
}