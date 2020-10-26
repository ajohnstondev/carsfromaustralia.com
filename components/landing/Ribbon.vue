<template>
  <div id="ribbon-container">
    <span id="ribbon">Available</span>
  </div>
</template>


<style>

  #ribbon-container {
    position: absolute;
    top: 18px;
    right: -3px;
    overflow: visible;
    z-index: 1;
    font-size: 12px;
    line-height: 18px;
  }

  #ribbon-container:before {
    content: "";
    height: 0;
    width: 0;
    display: block;
    position: absolute;
    top: 3px;
    left: 0;
    border-top: 10px solid rgba(0, 0, 0, .3);
    border-bottom: 10px solid rgba(0, 0, 0, .3);
    border-right: 10px solid rgba(0, 0, 0, .3);
    border-left: 10px solid transparent;
  }

  #ribbon-container:after {
    content: "";
    height: 3px;
    background: rgba(0, 0, 0, .3);
    display: block;
    position: absolute;
    bottom: -3px;
    left: 20px;
    right: 3px;
  }

  #ribbon-container span {
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    position: relative;
    background: #0089d0;
    overflow: visible;
    height: 20px;
    margin-left: 10px;
    color: #fff;
    text-decoration: none;
  }

  #ribbon-container span:after {
    content: "";
    height: 0;
    width: 0;
    display: block;
    position: absolute;
    bottom: -15px;
    right: 0;
    border-top: 15px solid #004a70;
    border-right: 15px solid transparent;
  }

  #ribbon-container span:before {
    content: "";
    height: 0;
    width: 0;
    display: block;
    position: absolute;
    top: 0;
    left: -10px;
    border-top: 10px solid #0089d0;
    border-bottom: 10px solid #0089d0;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }

</style>
