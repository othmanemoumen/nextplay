<?php
$ip = $_SERVER['REMOTE_ADDR'];
$apiKey = 'nmVWPdaTnoLKZZqtaKUnv7p1Pex
cjIBI'; // Replace with your IPQS API key
$smartLink = 'https://smrturl.co/8f336b5'; // Your real smart link
$redirectIfBlocked = 'blocked.html'; // Optional: page for blocked users

// Check IP with IPQS
$check = file_get_contents("https://ipqualityscore.com/api/json/ip/$apiKey/$ip");
$data = json_decode($check, true);

// Block if VPN, proxy, or TOR
if ($data['vpn'] || $data['proxy'] || $data['tor'] || $data['fraud_score'] > 85) {
    header("Location: $redirectIfBlocked");
    exit;
}

// If clean, send to the smart link
header("Location: $smartLink");
exit;
?>
