
**Aplicação:** 

**nome:** [NOME-APLICACAO]

**GIT:** [GRUPO-GIT]/[NOME-APLICACAO]

**JAR:** [NOME-APLICACAO].jar

**Java version:** 11
**Contexto Gateway(zuul):** [GRUPO-CONTEXTO-ZUUL]
**Contexto:** [CONTEXTO]

**URL CLOUD CONFIG:** 
[GRUPO-CONFIG-DEV]/[NOME-APLICACAO]
[GRUPO-CONFIG-ACT]/[NOME-APLICACAO]
[GRUPO-CONFIG-PRD]/[NOME-APLICACAO]

**Link portifolio EA:**  [PORTIFOLIO]

==========================================================================

**Bases de dados:**

**Chamado para usuário oracle:** [USUARIO-BANCO-CHAMADO]

**Nome de Usuario de banco:** [USUARIO-BANCO-USERNAME]

 

==========================================================================

**Servidores:**

Aplicação de Serviço interno e externo Tokio

Maquinas Internas(INT) e Externas(DMZ):

dev: srvacx01d, srvacxext01d
aceite: srvacx01a, srvacx02a, srvacxext01a e srvacxext02a
prod: srvacx01, srvacx02, srvacxext01, srvacxext02

 

==========================================================================

**Contexto de vip:**

 

Importante: Não é necessário a criação (associação de contexto) de vips, pois a aplicação será acessível via ZUUL e EUREKA.

 

Configuração do eureka:

 

Dev:

eureka.client.serviceUrl.defaultZone=http://localhost:6007/gestaoapolice/emissao/api/eureka-server/eureka

 

Aceite:

Y: eureka.client.serviceUrl.defaultZone=http://localhost:6006/gestaoapolice/emissao/api/eureka-server/eureka/

w: eureka.client.serviceUrl.defaultZone=http://localhost:6007/gestaoapolice/emissao/api/eureka-server/eureka/

 

Prod:

eureka.client.serviceUrl.defaultZone=http://localhost:6006/gestaoapolice/emissao/api/eureka-server/eureka

 

 

Contextos de vips onde a aplicação será utilizada:

 

DEV

Z: http://servicos-devintz.tokiomarine.com.br/
X: http://servicos-devintx.tokiomarine.com.br/
 

ACEITE

Y: 
http://servicos-aceiteint.tokiomarine.com.br/  (interno)
http://servicos-aceitedmzint.tokiomarine.com.br/ (externa)
 

W: 
http://servicos-aceiteint3.tokiomarine.com.br/  (interno)
http://servicos-aceitedmzint3.tokiomarine.com.br/ (externa)
 

Produção

http://servicos-int.tokiomarine.com.br/ (interno)
http://servicos-dmzint.tokiomarine.com.br/ (externa)
 

==========================================================================