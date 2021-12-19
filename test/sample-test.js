const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Locktoken", function () {
  it("return", async function () {

    const [owner, addr1, addr2] = await ethers.getSigners();

    const ECIOToken = await ethers.getContractFactory("ECIOToken");
    const ecioToken = await ECIOToken.deploy();
    await ecioToken.deployed();

    const ECIOLockToken = await ethers.getContractFactory("ECIOLockToken");
    const ecioLockToken = await ECIOLockToken.deploy(ecioToken.address);
    await ecioLockToken.deployed();

    expect(await ecioToken.owner()).to.equal(owner.address);
    expect(await ecioLockToken.owner()).to.equal(owner.address);
  });
});
