import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
const { ethers } = require("@nomiclabs/hardhat-ethers");

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy('Greeter', {
        from: deployer,
        args: ["hello world 001"],
        log: true,
    });
};
export default func;
func.tags = ['Greeter'];