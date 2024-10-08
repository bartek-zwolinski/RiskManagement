sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagment/riskmanagment/test/integration/FirstJourney',
		'riskmanagment/riskmanagment/test/integration/pages/RisksList',
		'riskmanagment/riskmanagment/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagment/riskmanagment') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);