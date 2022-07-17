export function check(a: string, b: string): boolean {
    if (Math.abs(a.length - b.length) > 1)
        return false;
    if(Math.abs(a.length - b.length) ==0){
        let cnt = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                cnt++;
                if (cnt > 1)
                    return false;
            }
        }
        return true;
    }

    if (a.length > b.length) {
        let i=0, j=0, cnt=0;
        while (i < b.length && j<a.length) {
           if (b[i] != a[j]){
                if(cnt==0)
                    j++;
                cnt++;
                if(cnt>1)
                    return false;
           }
           i++;
           j++;       
        }
        return true;
    } 
    let i=0, j=0, cnt=0;
    while (i < b.length && j<a.length) {
       if (b[i] != a[j]){
            if(cnt==0)
                i++;
            cnt++;
            if(cnt>1)
                return false;
       }
       i++;
       j++;       
    }
    return true;
}
