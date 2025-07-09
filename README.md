### FRONT-END - WEBSOCKETS

#### Dashboard O.S

Ferramenta visual que apresenta informações, indicadores e métricas relevantes de forma concisa e interativa para auxiliar na tomada de decisões e captura de dados de sistemas.


### Lista DHCP
```shell
d4-f5-47-1a-bf-3a: 192.168.1.240 - Google Nest
1e-4b-af-1c-e2-17: 192.168.1.241 - S24
00-e6-99-00-0d-ec: 192.168.1.242 - RaspberryPI Zero
00-57-c1-ea-38-a3: 192.168.1.243 - 
3c-7a-aa-12-4f-22: 192.168.1.244 - 
08-60-6e-84-6c-5b: 192.168.1.250 - LUKINHAS-PC
e0-ca-94-2d-8d-8c: 192.168.1.251 - Lukinhas-VPCEH30EB
50-3e-aa-77-51-88: 192.168.1.252 - Servidor-LNX
60-FB-00-FC-02-34: - CamraIP Cozinha
60-FB-00-FC-01-E3: - CamraIP Varanda
```

```shell
# cat /tmp/hosts 
D8:77:8B:A6:91:38: 192.168.1.1     ONT121W.meuintelbras.local ONT121W

# arp -n -v         
Address                 HWtype  HWaddress           Flags Mask            Iface
192.168.1.240           ether   d4:f5:47:1a:bf:3a   C                     br0
192.168.1.252           ether   50:3e:aa:77:51:88   C                     br0
192.168.1.6             ether   50:8b:b9:6a:a8:9f   C                     br0
192.168.1.250           ether   08:60:6e:84:6c:5b   C                     br0
192.168.1.8             ether   60:fb:00:fc:02:34   C                     br0
192.168.1.10            ether   3e:e7:05:a9:7f:84   C                     br0
192.168.1.7             ether   60:fb:00:fc:01:e3   C                     br0
192.168.1.4             ether   a0:92:08:81:ff:e6   C                     br0
192.168.1.254           ether   00:e6:99:00:0d:ec   C                     br0
192.168.1.5             ether   38:a5:c9:25:b1:c3   C                     br0
192.168.1.3             ether   b8:06:0d:c8:8a:f9   C                     br0
Entries: 11     Skipped: 0      Found: 11
```