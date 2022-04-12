const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ousia.sol", () => {
    let contractFactory;
    let contract;
    let owner;
    let alice;
    let bob;
    let initialSupply;
    let ownerAddress;
    let aliceAddress;
    let bobAddress;
    beforeEach(async () => {
        [owner, alice, bob] = await ethers.getSigners();
        initialSupply = ethers.utils.parseEther("100000");
        contractFactory = await ethers.getContractFactory("Ousia");
        ownerAddress = await owner.getAddress();
        aliceAddress = await alice.getAddress();
        bobAddress = await bob.getAddress();

    });
    describe("Correct setup", () => {
        it("should be named Ousia", async () => {
            const name = await contract.name();
            expect(name).to.equal("Ousia");
        });
        it("should have correct supply", async () => {
            const supply = await contract.getTotalSupply();
            expect(supply).to.equal(initialSupply);
        });
        it("owner should have all the supply", async () => {
            const ownerBalance = await contract.balanceOf(ownerAddress);
            expect(ownerBalance).to.equal(initialSupply);
        });
    });
    describe("Core", () => {
        it("owner should transfer to alice and update balance", async () => {
            const transferAmount = ethers.utils.parseEther("1000");
            let aliceBalance = await contract.balanceOf(aliceAddress);
            expect(aliceBalance).to.equal(0);
            await contract.transfer(transferAmount, aliceAddress);
            aliceBalance = await contract.balanceOf(aliceAddress);
            expect(aliceBalance).to.equal(transferAmount);
        });
        it("owner should transfer to alice and alice to bod", async() => {
            const transferAmount = ethers.utils.parseEther("1000");
            await contract.transfer(transferAmount, aliceAddress);
            let bodBalance = await contract.balanceOf(bobAddress);
            expect(bodBalance).to.equal(0);
            await contract.connect(alice).transfer(transferAmount, bobAddress);
            bodBalance = await contract.balanceOf(bobAddress);
            expect(bodBalance).to.equal(transferAmount);
        });
        it("should fail by depositing more than current balance", async () => {
            const txFailure = initialSupply + 1;
            await expect(contract.transfer(txFailure, aliceAddress)).to.be.revertedWith("not enough funds");
        });
    });
});