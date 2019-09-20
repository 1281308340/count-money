// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:2019,
    month:5,
    pay:3000,
    income:8000,
    arrData: ['apple', 'banana', 'pear', 'orange'],
    arrData2:[
      {name:'小红',age:18},
      { name: '小绿', age: 19 },
      { name: '小蓝', age: 20 }
    ],
    isShow:false,
    list:[]  
  },

  tap:function(){
    console.log(this.data.isShow)
    this.setData({
      isShow: !this.data.isShow
    })
  },

  change:function(event){
    //event 事件触发时 事件的详细信息
    var str=event.detail.value;
    var arr=str.split('-');
    this.setData({
        year:arr[0],
        month:arr[1]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //后台请求数据
    //得到数据
    var list= [
      {
        date: '11-1',
        day: '星期一',
        // income: 1000,
        // pay: 2000,
        data: [
          { tip: '礼金', msg: '过生日', pay: 1000 },
          { tip: '工资', msg: '11月工资', income: 8000 }
        ]
      },
      {
        date: '11-2',
        day: '星期二',
        // income: 1000,
        // pay: 2000,
        data: [
          { tip: '礼金', msg: '过生日', pay: 500 },
          { tip: '工资', msg: '12月工资', income: 9000 }
        ]
      }
    ]  
    //算下面列表收入支出的
    for(var i=0;i<list.length;i++){
        //arr[i]
      var income=0;
      var pay=0;
      for (var j = 0; j < list[i].data.length;j++){
        if (list[i].data[j].pay){
          pay += list[i].data[j].pay
        }
        if (list[i].data[j].income){
          income += list[i].data[j].income
        }
      }
      list[i].pay=pay;
      list[i].income=income
    }
    //算总收入支出
    var pay=0;
    var income=0;
    for(var i=0;i<list.length;i++){
        income+=list[i].income
        pay += list[i].pay
    }


    this.setData({
      list:list,
      pay:pay,
      income:income
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(5)    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(6)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})