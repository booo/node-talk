source = [1,35,43,1,23,5,123,23,2,3];
target = []

var i;

for (index in source) {
    var element = source[index];
    for(i=0;i<=target.length;i++) {
        if(!(target[i]<element)){
            var low = target.slice(0,i);
            low.push(element);
            target = low.concat(target.slice(i,target.lenght));
            break;
        }
    }
}

console.log(target)





