// Describe a feature
describe('Becoming Awesome', function(){
        it('should start out not very awesome', function(){
                var awesomeStatus = element(by.id('awesomeStatus'));
                expect(awesomeStatus.getText()).toContain('I am not awesome');
        });
        it('should become awesome', function(){
                element(by.id('becomeAwesome')).click();
        });
        // it('should be awesome', function(){
        //         var awesomeStatus = element(by.id('awesomeStatus'));
        //         expect(awesomeStatus.getText()).toContain('I am awesome');
        // });
        it('should check ng-click', function() {
                expect(element(by.binding('count')).getText()).toMatch('0');
                element(by.id('oneUp')).click();
                expect(element(by.binding('count')).getText()).toMatch('1');
        });
});