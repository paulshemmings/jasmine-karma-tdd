describe("MainApp.TemplateLayer", function() {

	beforeEach(function() {
	});

	it("init should build template collection and set template location", function() {
		spyOn(MainApp.TemplateLayer, 'compileTemplates');
		spyOn(MainApp.TemplateLayer, 'registerHelpers');

		MainApp.TemplateLayer.init('test-location');

		expect(MainApp.TemplateLayer.compileTemplates).toHaveBeenCalled();
		expect(MainApp.TemplateLayer.registerHelpers).toHaveBeenCalled();
		expect(MainApp.TemplateLayer.templateServerUrl).toEqual('test-location');
	});

});
