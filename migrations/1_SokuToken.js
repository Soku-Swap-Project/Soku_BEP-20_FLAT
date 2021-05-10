const SokuToken = artifacts.require("Soku");

module.exports = function(deployer) {
    deployer.then(function() {
        return deployer.deploy(SokuToken, "0xa07ccEB3Fe847352B8DD02C7A4fD2b68f8EeBaD9").then(soku => {
            console.log("SokuToken is deployed at ", soku.address);
        })
    });
}
