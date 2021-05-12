let rangeParameters = {
    range: true,
    min: 3090,
    max: 25089,
    values: [3090, 25089 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(ui.values[ 0 ]  );
      $( "#amountTwo" ).val(ui.values[ 1 ]);
    }
  }
  
  const handleChangeInputsValues = () => {
    let maxInputValue = $('#amountTwo').val();
    let minInoutValue = $('#amount').val();
  
    rangeParameters.values = [minInoutValue, maxInputValue]
  
    initSliderRange(rangeParameters)
  }
  
  $('.input_cost').focus(function() {
    $(this).val('')
  })
  
  $('.input_cost').keyup(() => handleChangeInputsValues())
  
  const initSliderRange = (rangeParameters) => {
    $( "#slider-range" ).slider(rangeParameters);
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amountTwo" ).val( $( "#slider-range" ).slider( "values", 1 ));
  };
  
  initSliderRange(rangeParameters)