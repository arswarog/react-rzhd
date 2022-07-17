export function check(a: string, b: string): boolean {
  if(Math.abs(a.length-b.length)>1)
   return false;
  if(Math.abs(a.length-b.length)==1){
    if(a.length>b.length){
        for(let i=0; i<b.length; i++){
            if(b[i]!=a[i])
             return false;
        }
    }
    for(let i=0; i<a.length;i++){
        if(b[i]!=a[i])
         return false;
    }
  }
  let cnt=0;
  for(let i=0; i<a.length; i++){
    if(a[i]!=b[i]){
        cnt++;
        if(cnt>1)
            return false;
    }
  }
  return true;
}
