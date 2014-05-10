describe("MainApp", function() {
	beforeEach(function() {
		jasmine.getFixtures().fixturesPath = '/';
		loadFixtures('base/fixtures/index-fixture.html');
	});

	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});

	it("initializing page should call render template", function() {
		spyOn(MainApp.TemplateLayer,'renderTemplate');
		MainApp.inititalizePage();
		expect(MainApp.TemplateLayer.renderTemplate)
			.toHaveBeenCalledWith('front-page', '#main-container', {}, false);
	});
});
