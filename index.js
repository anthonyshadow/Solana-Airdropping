const { Connection, PublicKey, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } =  require("@solana/web3.js")

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey

const getWalletBalance = async() => {
    try{
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletballance = await connection.getBalance(publicKey)
        console.log('Wallet Balance is',walletballance)
    } catch(err) {
        console.error(err)
    }
}

const main = async() => {
    await getWalletBalance()
}

main()