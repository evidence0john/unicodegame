var player = new Object();
player.init = function (tagid, shape, fireshape, bltshape, air, endl)
{
    this.endl = '';
    this.air = '';
    this.buf = '';
    this.line = '';
    this.offset = '';
    this.layer = '';
    this.shape = '';
    this.fshape = '';
    this.bullet = '';
    this.bulfx = '';
    this.pshape = '';
    this.bulstat = 0;
    this.bfxc = 0;
    this.astat;
    this.endl = endl;
    this.air = air;
    this.buf = shape;
    this.shape = shape;
    this.fshape = fireshape;
    this.layer = tagid;
    this.bullet = bltshape;
    this.pshape = this.shape;
}
player.up = function ()
{
    this.line = this.line.slice(1);
    this.buf = this.line + this.offset + this.shape;
    document.getElementById(this.layer).innerText = this.buf;
}
player.down = function ()
{
    this.line = this.line + this.endl;
    this.buf = this.line + this.offset + this.shape;
    document.getElementById(this.layer).innerText = this.buf;
}
player.left = function ()
{
    this.offset = this.offset.slice(1);
    this.buf = this.line + this.offset + this.shape;
    document.getElementById(this.layer).innerText = this.buf;
}
player.right = function ()
{
    this.offset = this.offset + this.air;
    this.buf = this.line + this.offset + this.shape;
    document.getElementById(this.layer).innerText = this.buf;
}
player.bltact = function ()
{
    if (this.bfxc == 0)
    {
        this.bulfx = 'o';
        this.shape = this.fshape;
    }
    if (this.bfxc == 6)
    {
        this.bulfx = 'O' + this.bulfx.slice(1);
    }
    if (this.bfxc == 9)
    {
        this.bulfx = this.bulfx.slice(1);
        this.shape = this.pshape;
    }
    this.bulfx = this.bulfx + this.air;
    this.buf = this.line + this.offset + this.shape + this.bulfx + this.bullet;
    this.bfxc++;
    if (this.buf.length - (this.line.length + this.offset.length) > 20)
    {
        this.buf = this.line + this.offset + this.shape;
        this.bulfx = '';
        this.bfxc = 0;
        this.stopbact();
        document.getElementById(this.layer).innerText = this.buf;
    }
}
player.stopbact = function ()
{
    if (this.bulstat != 0)
        this.bulstat = 0;
    else
        return;
    clearInterval(this.astat);
}
player.fire = function ()
{
    if (this.bulstat != 0)
        return;
    this.bulstat = 1;
    this.astat = setInterval("player.bltact();", 10);
}
function init()
{
    player.init('divp', cplayer, pfire, bullet);
}
