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

let currentScroll = 0;

function showVal(index) {

    currentScroll = $('#list').get(0).scrollLeft;
    console.log('currentScroll : '+currentScroll);
    
    let scrollWidth = $('#list').get(0).scrollWidth;
    console.log('scrollWidth : '+scrollWidth);
    let scrollPerWidth = scrollWidth/10;
    console.log('scrollPerWidth : '+scrollPerWidth);

    let wantsPosition = scrollPerWidth * index;

    if (wantsPosition < currentScroll) {    
        $('#list').animate({
            scrollLeft: '-='+(currentScroll-wantsPosition)+'px'
        }, "slow");
    } else {
        $('#list').animate({
            scrollLeft: '+='+(wantsPosition-currentScroll)+'px'
        }, "slow");
    }

    
}