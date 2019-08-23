div#reminder
{
    float: right;
    width: 280px;
    height:310px;
    overflow:hidden;;     /* if you don't want a scrollbar, set to hidden */
    overflow-x:hidden;   /* hides horizontal scrollbar on newer browsers */

    /* resize and min-height are optional, allows user to resize viewable area */
    -webkit-resize:vertical;
    -moz-resize:vertical;
    resize:vertical;
    /* min-height:317px; */
    margin-right: 50px;
    margin-top: -500px;
    /* position: relative;
    z-index: 1; */
}

iframe#embed2
{
  width: 710px;       /* set this to approximate width of entire page you're embedding */
  height:410px;      /* determines where the bottom of the page cuts off */
  /* margin-left:-1000px; /* clipping left side of page */ */
  margin-left: -1000px;
  margin-top:130px;  /* clipping top of page */
  overflow:hidden;

  /* resize seems to inherit in at least Firefox */
  -webkit-resize:none;
  -moz-resize:none;
  resize:none;

  -moz-transform: scale(0.4, 0.4);
  -webkit-transform: scale(0.4, 0.4);
  -o-transform: scale(0.4, 0.4);
  -ms-transform: scale(0.4, 0.4);
  transform: scale(0.4, 0.4);
  -moz-transform-origin: top left;
  -webkit-transform-origin: top left;
  -o-transform-origin: top left;
  -ms-transform-origin: top ft;
  transform-origin: top left;
}
