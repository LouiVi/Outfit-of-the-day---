"use strict"

//Create a Home object.
function Home( path, layContent )
{
		var self = this;
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn");
        else lay.Animate( "FadeOut" );
    }
    this.Ready = function ()
{
//img.Gone();
//player.Animate( "FadeIn", 250 );
	player.Play();
}

    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "Top,FillXY,HCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    var player = app.CreateVideoView( 1, -1 );
    player.SetOnReady( self.Ready );
    player.SetOnComplete( self.Ready );
    player.SetFile(  "Misc/video.webm");
    //player.Gone();
    lay.AddChild( player );
    //Add a logo.
	var img = app.CreateImage( "Img/thumbnail.png", 0.625 );
//	lay.AddChild( img );
	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
   // lay.AddChild( txt );
}