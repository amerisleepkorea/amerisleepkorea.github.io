function makestarts(starts) {
    let result = '';
    for (var i = 0; i < starts; i++) {
        result += '<img src="assets/img/red_star.png" style="height: 15px;" />';
    }
    return result;
}

function PutData(brand, name, date, starts, message) {
    return '<div class="commentbox"> \
        <div style="display: flex;flex-direction: row;"> \
            <div style="flex-grow: 1;">'+ brand + '</div> \
            <div style="flex-grow: 1;text-align: right;">'+ makestarts(starts) + '</div> \
        </div> \
        <div style="height: 80%;display: flex;flex-direction: column;"> \
            <div>'+ name + '</div> \
            <div style="flex-grow: 1;display: flex;align-items: center;">'+ message + '</div> \
            <div style="display: flex;flex-direction: row;"> \
                <div style="flex-grow: 1;">'+ date + '</div> \
                <div style="flex-grow: 1;text-align: right;"> \
                    <img src="assets/img/instagram.jpg" style="height: 15px;" /> \
                    <img src="assets/img/blog.png" style="height: 15px;" /> \
                </div> \
            </div> \
        </div> \
    </div>';
}

function showVal(index) {
    let gap = 300 * index
    console.log(gap);
    $('#list').scrollLeft(gap);
}