function camelcase(s) {
    var count = 1;
    for(i=0;i<s.length;i++){
        if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
            count++;
        }
    }
    return count;
}

var s = 'saveChangesInTheEditor';
var result = camelcase(s);
process.stdout.write("" + result + "\n");