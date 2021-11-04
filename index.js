function superbowlWin(records) {
    const win = records.find(record => record.result === 'W');
    if(win != undefined){
        return win.year;
    }else{
        return;
    }
}