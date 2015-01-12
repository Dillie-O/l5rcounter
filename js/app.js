$( document ).ready(function()
{
	 // Wire up increment/decrement buttons.
	 $('.your-honor-control').on( "click", function()
	 {
		  var change = parseInt($(this).data('change'));
		  var currentHonor = parseInt($('#your-honor-value').text());
		  var newHonor = currentHonor + change;

		  $('#your-honor-value').text(newHonor);
	 });

	 $('.opponent-honor-control').on( "click", function()
	 {
		  var change = parseInt($(this).data('change'));
		  var currentHonor = parseInt($('#opponent-honor-value').text());
		  var newHonor = currentHonor + change;

		  $('#opponent-honor-value').text(newHonor);
	 });

	 // Wire up clan changes.
	 $( "#select-your-clan" ).change(function()
	 {
		var clanName = $(this).find('option:selected').text();
		var startingHonor = parseInt($(this).val());
		var clanFace = $('#select-stronghold-face').data('face');
		var strongholdImage = 'img/' + clanName + clanFace + '.jpg';
		var clanMonImage = '/img/Clan' + clanName + '.png';

		$('#drop-your-clan').data('clan-name', clanName);
		$('#drop-your-clan').data('starting-honor', startingHonor);
		$('#select-your-clan').data('clan-name', clanName);
		$('#select-your-clan').data('starting-honor', startingHonor);
		$('#your-stronghold').attr('src', strongholdImage);
		$('#your-clan-name').text(clanName);
		$('#your-honor-value').text(startingHonor);
		$('#your-honor-value').css("background", "url('" + clanMonImage + "') no-repeat center center");
		$('#your-honor-value').css("background-size", "contain");
	 });

	 $( "#select-opponent-clan" ).change(function()
	 {
		var clanName = $(this).find('option:selected').text();
		var startingHonor = parseInt($(this).val());
		var clanMonImage = '/img/Clan' + clanName + '.png';

		$('#select-opponent-clan').data('clan-name', clanName);
		$('#select-opponent-clan').data('starting-honor', startingHonor);
		$('#opponent-clan-name').text(clanName);
		$('#opponent-honor-value').text(startingHonor);
		$('#opponent-honor-value').css("background", "url('" + clanMonImage + "') no-repeat center center");
		$('#opponent-honor-value').css("background-size", "contain");
		
	 });

	 // Wire up front/back display for card image.
	 $('#select-stronghold-face').change(function()
	 {
		  var face = $(this).val();
		  var clanName = $('#select-your-clan').data('clan-name');
		  var strongholdImage = 'img/' + clanName + face + '.jpg';

		  $('#select-stronghold-face').data('face', face);
		  $('#your-stronghold').attr('src', strongholdImage);
	 });

	 // Wire up reset button.
	 $('#reset-button').on( "click", function()
	 {
		  var startingHonor = $('#select-your-clan').data('starting-honor');
		  var opponentStartingHonor = $('#select-opponent-clan').data('starting-honor');

		  $('#your-honor-value').text(startingHonor);
		  $('#opponent-honor-value').text(opponentStartingHonor);
			$('#your-standoff-value').text('0');
			$('#opponent-standoff-value').text('0');
	 });

	// Wire up increment/decrement buttons for political standoff.
	$('.your-standoff-control').on( "click", function()
	{
		var change = parseInt($(this).data('change'));
		var currentValue = parseInt($('#your-standoff-value').text());
		var newValue = currentValue + change;

		$('#your-standoff-value').text(newValue);
	});

	$('.opponent-standoff-control').on( "click", function()
	{
		var change = parseInt($(this).data('change'));
		var currentValue = parseInt($('#opponent-standoff-value').text());
		var newValue = currentValue + change;

		$('#opponent-standoff-value').text(newValue);
	});
	
	// Wire up win8 tile toggle.
	 $('#toggle-tile-button').on( "click", function()
	 {
		  ToggleTileOverlay();
	 });
	
	function ToggleTileOverlay() 
	{ 
		var newVisibility = (document.getElementById('TileOverlay').style.visibility == 'visible') ? 'hidden' : 'visible'; 
		document.getElementById('TileOverlay').style.visibility = newVisibility; 
	} 
});
