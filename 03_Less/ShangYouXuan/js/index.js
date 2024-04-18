window.onload = function() {

    const path = goodData.path;
    const imagesSrc = goodData.imagesSrc;
    const goodsDetail = goodData.goodsDetail;
    const crumbData = goodsDetail.crumbData;

    let smallAndBigImgIndex = 0;

    pathNavDataBind();
    bigClassBind();
    thumbnailData();
    thumbnailClick();
    preAndNextClick();
    rightTopData();
    rightBottomData();
    clickDdBind();
    choosePrice();
    asideTab();
    goodsTab();
    rightAsideBind();
    
    function rightAsideBind() {
        let btns = document.querySelector(".btns");
        let aside = document.querySelector(".right-aside-closed");
        let flag = true;
        btns.onclick = function() {
            if (flag) {
                btns.className = "btns btns-open";
                aside.className = "right-aside right-aside-open";
            } else {
                btns.className = "btns btns-closed";
                aside.className = "right-aside right-aside-closed";
            }
            flag = !flag;
        }
    }
    function asideTab() {
        let h4s = document.querySelectorAll("#aside-top h4");
        let divs = document.querySelectorAll("#aside-bottom>div");
        Tab(h4s, divs);
    }
    
    function goodsTab() {
        let lis = document.querySelectorAll(".tab-btns li");
        let divs = document.querySelectorAll(".tab-contents div");
        Tab(lis, divs);
    }
    
    function Tab(tabBtns, tabConts) {
        for (let i = 0; i < tabBtns.length; i++) {
            tabBtns[i].index = i;
            tabBtns[i].onclick = function() {
                for (let j = 0; j < tabBtns.length; j++) {
                    tabBtns[j].className = "";
                    tabConts[j].className = "";
                }
                this.className = "active";
                tabConts[this.index].className = "active";
            }
        }
    }
    
    function choosePrice() {
        let leftPrice = document.querySelector("#choose-left span");
        let rightPrice = document.querySelector("#choose-right > span:nth-child(3)");
        let its = document.querySelectorAll("#choose-center li div input");
        for (let i = 0; i < its.length; i++) {
            its[i].onclick = function() {
                let oldPrice = Number(leftPrice.innerText.slice(1));
                for (let j = 0; j < its.length; j++) {
                    if (its[j].checked) {
                        oldPrice += Number(its[j].value);
                    }
                }
                rightPrice.innerHTML = "￥" + oldPrice;
            }
        }
    }

    function changePriceBind(arr) {
        let oldPrice = document.getElementById("price");
        let bottomLeftPrice = document.querySelector("#choose-left span");
        let bottomRightPrice = document.querySelector("#choose-right > span:nth-child(3)");
        let price = goodsDetail.price;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                price += Number(arr[i].getAttribute("changePrice"));
            }
        }
        oldPrice.innerText = price;
        bottomLeftPrice.innerText = "￥" + price;
        bottomRightPrice.innerText = "￥" + price;
    }

    function clickDdBind() {
        let dls = document.querySelectorAll("#select dl");
        let choose = document.getElementById("choose");
        let arr = new Array(dls.length);
        let pre = 0;
        arr.fill(0);
        for (let i = 0; i < dls.length; i++) {
            (function (i) {
                let dds = dls[i].querySelectorAll("dd");
                for (let j = 0; j < dds.length; j++) {
                    dds[j].onclick = function() {
                        for (let k = 0; k < dds.length; k++) {
                            dds[k].style.color = "#666";
                        }
                        choose.innerText = "";
                        this.style.color = "red";
                        arr[i] = this;
                        changePriceBind(arr);
                        arr.forEach(function (value, index) {
                            if (value) {
                                let markDiv = document.createElement("div");
                                markDiv.className = "mark";
                                markDiv.innerText = value.innerText;
                                let aNode = document.createElement("a");
                                aNode.innerText = "X";
                                aNode.setAttribute("index", index.toString());
                                markDiv.appendChild(aNode);
                                choose.appendChild(markDiv);
                            }
                        })
                        let aNodes = document.querySelectorAll(".mark a");
                        for (let n = 0; n < aNodes.length; n++) {
                            aNodes[n].onclick = function() {
                                let idx = aNodes[n].getAttribute("index");
                                arr[idx] = 0;
                                let ddList = dls[idx].querySelectorAll("dd");
                                for (let m = 0; m < ddList.length; m++) {
                                    ddList[m].style.color = "#666";
                                }
                                ddList[0].style.color = "red";
                                choose.removeChild(this.parentNode);
                                changePriceBind(arr);
                            }
                        }
                    }
                }
            })(i)
        }
    }

    function rightBottomData() {
        let selectDiv = document.getElementById("select");
        for (let i = 0; i < crumbData.length; i++) {
            let selectDl = document.createElement("dl");
            let selectDt = document.createElement("dt");
            selectDt.innerText = crumbData[i].title;
            selectDl.appendChild(selectDt);
            for (let j = 0; j < crumbData[i].data.length; j++) {
                let selectDd = document.createElement("dd");
                selectDd.innerText = crumbData[i].data[j].type;
                selectDd.setAttribute("changePrice", crumbData[i].data[j].changePrice);
                selectDl.appendChild(selectDd);
            }
            selectDiv.appendChild(selectDl);
        }
    }

    function setTextContent(elementId, text) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerText = text;
        }
    }
    function rightTopData() {
        setTextContent("goods-title",               goodsDetail.title);
        setTextContent("recommend",                 goodsDetail.recommend);
        setTextContent("price",                     goodsDetail.price);
        setTextContent("remarks",                   goodsDetail.evaluateNum);
        setTextContent("promote-sales-type",        goodsDetail.promoteSales.type);
        setTextContent("promote-sales-content",     goodsDetail.promoteSales.content);
        setTextContent("support-content",           goodsDetail.support);
        setTextContent("address",                   goodsDetail.address);
    }

    function preAndNextClick() {
        let preBtn = document.getElementById("pre-pic");
        let nextBtn = document.getElementById("next-pic");
        let picList = document.getElementById("pic-list");
        let liNodes = document.querySelectorAll("#pic-list li");
        let start = 0;
        let step = (liNodes[0].offsetWidth + 20) * 2;
        let end = (liNodes.length - 5) * (liNodes[0].offsetWidth + 20);

        preBtn.onclick = function() {
            start -= step;
            start = start < 0 ? 0 : start;
            picList.style.left = -start + "px";
        }
        nextBtn.onclick = function() {
            start += step;
            start = start > end ? end : start;
            picList.style.left = -start + "px";
        }
    }

    function thumbnailClick() {
        let LiNodes = document.querySelectorAll("#pic-list li");
        let smallPic = document.querySelector("#small-pic img");
        smallPic.src = imagesSrc[0].s;
        for (let i = 0; i < LiNodes.length; i++) {
            LiNodes[i].index = i;

            LiNodes[i].onclick = function () {
                smallAndBigImgIndex = LiNodes[i].index;
                smallPic.src = imagesSrc[smallAndBigImgIndex].s;
            }
        }
    }

    function thumbnailData() {
        let picList = document.getElementById("pic-list");
        for (let i = 0; i < imagesSrc.length; i++) {
            let LiNode = document.createElement("li");
            let aNode = document.createElement("img");
            aNode.src = imagesSrc[i].s;
            LiNode.appendChild(aNode);
            picList.appendChild(LiNode);
        }
    }

    function bigClassBind() {
        let leftTop = document.getElementById("left-top");
        let smallPic = document.getElementById("small-pic");
        
        smallPic.onmouseenter = function() {
            let maskDiv = document.createElement("div");
            maskDiv.className = "mask";
            let bigPicDiv = document.createElement("div");
            bigPicDiv.id = "big-pic";
            let bigPicDivImg = document.createElement("img");
            bigPicDivImg.src = imagesSrc[smallAndBigImgIndex].b;
            
            smallPic.appendChild(maskDiv);
            bigPicDiv.appendChild(bigPicDivImg);
            leftTop.appendChild(bigPicDiv);
            
            smallPic.onmousemove = function (event) {
                let left = event.clientX - smallPic.getBoundingClientRect().left - maskDiv.offsetWidth / 2;
                let top = event.clientY - smallPic.getBoundingClientRect().top - maskDiv.offsetHeight / 2;
                left = left < 0 ? 0 : left;
                left = left > smallPic.clientWidth - maskDiv.offsetWidth ? smallPic.clientWidth - maskDiv.offsetWidth : left;
                top = top < 0 ? 0 : top;
                top = top > smallPic.clientHeight - maskDiv.offsetHeight ? smallPic.clientHeight - maskDiv.offsetHeight : top;

                maskDiv.style.left = left + "px";
                maskDiv.style.top = top + "px";

                let scale = (smallPic.clientWidth - maskDiv.offsetWidth) / (bigPicDivImg.offsetWidth - bigPicDiv.clientWidth);
                bigPicDivImg.style.left = -left / scale + "px";
                bigPicDivImg.style.top = -top / scale + "px";
            }
            
            smallPic.onmouseleave = function () {
                smallPic.removeChild(maskDiv);
                leftTop.removeChild(bigPicDiv);
            }
        }
    }

    function pathNavDataBind() {
        let pathNav = document.getElementById("path-nav");
        /*
        let addPath;
        for (let i = 0; i < path.length - 1; i++) {
            addPath += `<a href="${path[i].url}">${path[i].title}</a><i>/</i>`;
        }
        addPath += `<a>${path[path.length - 1].title}</a>`;
        pathNav.insertAdjacentHTML("beforeend", addPath);
        */
        for (let i = 0; i < path.length - 1; i++) {
            let aNode = document.createElement("a");
            aNode.href = path[i].url;
            aNode.innerText = path[i].title;
            pathNav.appendChild(aNode);
            let iNode = document.createElement("i");
            iNode.innerText = "/";
            pathNav.appendChild(iNode);
        }
        let aNode = document.createElement("a");
        aNode.innerText = path[path.length - 1].title;
        pathNav.appendChild(aNode);
    }
}