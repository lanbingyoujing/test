
$(function(){
    function addHtml(){
        var wrap = $('.wrap');
        var myHtml='';
        var myLi='';
        var data={
            photo:[{
                img:'img/1.jpg',
                title:'战场',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/2.jpg',
                title:'特种不对',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/3.jpg',
                title:'风暴',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/4.jpg',
                title:'特种涩北',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/5.jpg',
                title:'绣春刀',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/6.jpg',
                title:'爵迹',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/7.jpg',
                title:'魔兽世界',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/8.jpg',
                title:'正好遇见你',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/9.jpg',
                title:'盗墓笔记',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/10.jpg',
                title:'怨灵',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/11.jpg',
                title:'泰坦尼克号',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/12.jpg',
                title:'拜见岳父达人',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/13.jpeg',
                title:'淡定密码',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/14.jpg',
                title:'战场',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/15.jpg',
                title:'静态',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/16.jpg',
                title:'海盗',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/17.jpg',
                title:'在面',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            },{
                img:'img/18.jpg',
                title:'灾变',
                desc:'打开附件打开会计法开关离开大家但是看了尽快的房间'
            }]
        };

        $.each(data.photo, function (index,value) {
            myHtml+='<div class="photo photo-front">';
            myHtml+='    <div class="photo-wrap ">';
            myHtml+='        <div class="side side-front">';
            myHtml+='        <p class="image"><img src="'+value.img+'" alt=""></p>';
            myHtml+='        <p class="caption">'+value.title+'</p>';
            myHtml+='        </div>';
            myHtml+='          <div class="side side-back">';
            myHtml+='          <p class="desc">';
            myHtml+='         '+value.desc+'';
            myHtml+='     </p>';
            myHtml+='     </div>';
            myHtml+='     </div>';
            myHtml+='     </div>';

            myLi+=' <li>';
            myLi+='     <span class="list-front"></span>';
            myLi+='     <span class="list-back"></span>';
            myLi+=' </li>'
        });
        var ul=$('<div><ul class="list">'+myLi+'</ul></div>');
        wrap.html(myHtml+ul.html())
    }
    addHtml();

    var wrap = $('.wrap');
    var photos = wrap.find('.photo');
    var lis = $('.wrap .list li');
    //随机一个数，这个数决定了谁在中间
    function myMath(){
        var rand = '';
        var photoNum = $('.wrap .photo').length;
        rand = Math.round(Math.random()*photoNum);
        return rand
    }

    //图片在中央时，小圆点应该对应的点,并且让所有的图片都正面显示,让所有的小圆点正面显示
    function centerPhoto(num){
        //圆点正面显示
        lis.removeClass('li-back').addClass('li-front');
        //图片全部正面显示
        photos.addClass('photo-front').removeClass('photo-back');
        //相应的图片在中间
        photos.eq(num).addClass('photo-center').siblings('.photo').removeClass('photo-center');
        var L = photos.filter('.photo-center').index();
        lis.eq(L).find('span').addClass('span-style').end().siblings('li').find('span').removeClass('span-style');
    }

    //图片和圆点背面显示
    function allBack(num){
        photos.eq(num).removeClass('photo-front').addClass('photo-back');
        lis.eq(num).removeClass('li-front').addClass('li-back')
    }

    //图片和圆点正面显示
    function allFront(num){
       photos.eq(num).removeClass('photo-back').addClass('photo-front');
        lis.eq(num).removeClass('li-back').addClass('li-front')
    }

    //根据myMath() 来随机选择一张图片放在中间,并且然相应的小圆点变化样式
    centerPhoto(myMath());

    //把两边的图片随机定位好
    function positionPhoto(){

        //吧海报分为两个部分
        var photoArr = [];
        for(var i = 0; i<photos.length; i ++){
            if(!photos.eq(i).hasClass('photo-center'))
                photoArr.push(photos.eq(i))
        }
        var photoL = photoArr.splice(0,parseInt(photoArr.length / 2));
        var photoR = photoArr;


        //确定左右两部分图片的放置范围,和旋转角度
        function randPosition(){
            var leftMax = wrap.width() / 2 - photos.eq(1).width() / 2 - photos.eq(1).width();
            var leftMin = - photos.eq(1).width();
            var hMax = wrap.height();
            var hMin = - photos.eq(1).height();
            var rightMax = wrap.width();
            var rightMin =  wrap.width() / 2 + photos.eq(1).width() / 2;
            var randLeftW = Math.random() * (leftMax - leftMin) + leftMin;
            var randRightW = Math.random() * (rightMax - rightMin)+rightMin;
            var randH = Math.random() * (hMax-hMin) + hMin;
            var deg = Math.random()*720;
            var positionArr={
                lW:randLeftW,
                rW:randRightW,
                H:randH,
                Deg:deg
            };
            return positionArr
        }
        //放置左边的图片
        for(var s = 0; s < photoL.length; s ++ ){

            $(photoL[s]).css({
                left:randPosition().lW,
                top:randPosition().H,
                transform:'rotate('+randPosition().Deg+'deg)'
            })
        }
        //放置右边的图片
        for(var x = 0; x < photoR.length; x ++ ){
            $(photoR[x]).css({
                left:randPosition().rW,
                top:randPosition().H,
                transform:'rotate('+randPosition().Deg+'deg)'
            });
        }
    }
    positionPhoto();


    //点击小圆点，让相应图片居中
    lis.click(function () {
        var cur = $(this).index();

        //如果点击在中央的图片按钮，那么就翻转图片，否则就让相应的图片到中央
        if($(this).find('span').hasClass('span-style')){
            //如果是中央的图片
            if(photos.eq(cur).hasClass('photo-front')){
                allBack(cur)
            } else
            if(photos.eq(cur).hasClass('photo-back')){
                allFront(cur)
            }
        }else{
            centerPhoto(cur);
            positionPhoto()
        }


    });


    //点击没有photo-center的图片，让他在中间显示
    photos.click(function () {
        var cur = $(this).index();
        //如果点击的图片不是中央图片就让他在中央
        if(!$(this).hasClass('photo-center')){
            centerPhoto(cur);
            positionPhoto()
        }
        //如果在中央就翻转，并且让小远点也翻转
        else if($(this).hasClass('photo-center')){
            if($(this).hasClass('photo-front')){
                allBack(cur)
            }else if($(this).hasClass('photo-back')){
                allFront(cur)
            }
        }
    })





});





