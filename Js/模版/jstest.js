
var rule={
title:'猫影汇',
host:'https://www.miaoyinghui.com',
url:'/vodshow/fyclass--------fypage---.html',
searchUrl:'/vodsearch/**----------fypage---.html',
searchable:2,
quickSearch:0,
filterable:0,
headers:{'User-Agent':'MOBILE_UA', },
class_name:'电影&电视剧&综艺&动漫',
class_url:'1&2&3&4',
play_parse:true,
lazy:'',
limit:6,
推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-caption.right&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
二级:{"title":"h1&&Text;.video-info-aux&&div&&a:eq(0)&&Text","img":".module-item-pic&&img&&data-src","desc":";.video-info-aux&&a:eq(1)&&Text;.video-info-aux&&a:eq(2)&&Text;.video-info-items:eq(1) a&&Text;.video-info-items:eq(0) a&&Text","content":".video-info-content&&Text","tabs":".module-tab-content&& span","lists":".module-player-list:eq(#id)&&.scroll-content&&a"},
搜索:'.module-search-item;a&&title;img&&data-src;.module-item-caption.right&&Text;a&&href',
}
